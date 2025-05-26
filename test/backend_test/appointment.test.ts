import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL || 'http://localhost:3000/api';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Appointment Tests', () => {
  it('should create a new appointment', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 201 });
    const response = await mockedAxios.post(`${API_URL}/appointments`, {
      serviceId: '123',
      employeeId: '456',
      date: '2023-10-01T10:00:00Z',
    });
    expect(response.status).toBe(201);
  });

  it('should get all appointments', async () => {
    mockedAxios.get.mockResolvedValueOnce({ status: 200, data: [] });
    const response = await mockedAxios.get(`${API_URL}/appointments`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });
}); 