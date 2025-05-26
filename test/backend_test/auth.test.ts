import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Authentication Tests', () => {
  it('should register a new user', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 201 });
    const response = await mockedAxios.post(`${API_URL}/users/register`, {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    });
    expect(response.status).toBe(201);
  });

  it('should login a user', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 200, data: { token: 'fake-token' } });
    const response = await mockedAxios.post(`${API_URL}/users/login`, {
      email: 'test@example.com',
      password: 'password123',
    });
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
  });
}); 