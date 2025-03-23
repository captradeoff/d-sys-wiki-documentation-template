const core = require('@actions/core');
const { TwitterApi } = require('twitter-api-v2');

// Mock dependencies
jest.mock('@actions/core');
jest.mock('twitter-api-v2');

describe('Twitter Post Action', () => {
  let mockTweet;
  
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    
    // Setup input values
    core.getInput = jest.fn().mockImplementation((name) => {
      switch (name) {
        case 'appKey': return 'test-app-key';
        case 'appSecret': return 'test-app-secret';
        case 'accessToken': return 'test-access-token';
        case 'accessSecret': return 'test-access-secret';
        case 'message': return 'Test tweet message';
        case 'community-id': return '';
        default: return '';
      }
    });

    // Setup Twitter mock
    mockTweet = jest.fn();
    TwitterApi.mockImplementation(() => ({
      v2: {
        tweet: mockTweet
      }
    }));
    
    // Setup console mock
    console.log = jest.fn();
  });

  test('posts a tweet successfully', async () => {
    // Mock successful tweet response
    mockTweet.mockResolvedValue({
      data: { id: '123456789', text: 'Test tweet message' }
    });

    // Run the action
    require('./index');

    // Verify Twitter client was initialized correctly
    expect(TwitterApi).toHaveBeenCalledWith({
      appKey: 'test-app-key',
      appSecret: 'test-app-secret',
      accessToken: 'test-access-token',
      accessSecret: 'test-access-secret',
    });

    // Wait for async operations
    await new Promise(process.nextTick);

    // Verify tweet was sent with correct parameters
    expect(mockTweet).toHaveBeenCalledWith('Test tweet message', {});
    
    // Verify output was set correctly
    expect(core.setOutput).toHaveBeenCalledWith('post-id', '123456789');
    
    // Verify log was called
    expect(console.log).toHaveBeenCalledWith('Tweet #', '123456789', ': ', 'Test tweet message');
  });

  test('posts a tweet to community successfully', async () => {
    // Override community-id input
    core.getInput = jest.fn().mockImplementation((name) => {
      switch (name) {
        case 'appKey': return 'test-app-key';
        case 'appSecret': return 'test-app-secret';
        case 'accessToken': return 'test-access-token';
        case 'accessSecret': return 'test-access-secret';
        case 'message': return 'Test community tweet message';
        case 'community-id': return '98765';
        default: return '';
      }
    });

    // Mock successful tweet response
    mockTweet.mockResolvedValue({
      data: { id: '123456789', text: 'Test community tweet message' }
    });

    // Run the action
    require('./index');

    // Wait for async operations
    await new Promise(process.nextTick);

    // Verify tweet was sent with community_id
    expect(mockTweet).toHaveBeenCalledWith('Test community tweet message', { community_id: '98765' });
    
    // Verify output was set correctly
    expect(core.setOutput).toHaveBeenCalledWith('post-id', '123456789');
  });

  test('handles tweet failure', async () => {
    // Mock tweet failure
    mockTweet.mockRejectedValue(new Error('Tweet failed'));

    // Run the action
    require('./index');

    // Wait for async operations
    await new Promise(process.nextTick);

    // Verify tweet was attempted
    expect(mockTweet).toHaveBeenCalled();
    
    // Verify error was handled
    expect(core.setFailed).toHaveBeenCalledWith('Tweet failed');
  });

  test('handles initialization error', async () => {
    // Make TwitterApi throw an error
    TwitterApi.mockImplementation(() => {
      throw new Error('Initialization failed');
    });

    // Run the action
    require('./index');

    // Verify error was handled
    expect(core.setFailed).toHaveBeenCalledWith('Initialization failed');
  });
}); 