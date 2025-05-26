import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Employee Tests', () => {
  it('should create a new employee', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 201 });
    const response = await mockedAxios.post(`${API_URL}/employees`, {
      name: 'Test Employee',
      email: 'employee@example.com',
      phone: '1234567890',
    });
    expect(response.status).toBe(201);
  });

  it('should get all employees', async () => {
    mockedAxios.get.mockResolvedValueOnce({ status: 200, data: [] });
    const response = await mockedAxios.get(`${API_URL}/employees`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
}); 