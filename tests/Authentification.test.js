const { BasicAuthentication } = require('../utilities/authentication');
const bcrypt = require('bcrypt-nodejs');
const db = require('../utilities/SQL');

jest.mock('../utilities/SQL', () => ({
    query: jest.fn(),
}));

describe('BasicAuthentication', () => {
    let mockRequest;
    let mockResponse;
    let mockNext;

    beforeEach(() => {
        mockRequest = {
            headers: {},
        };
        mockResponse = {
            set: jest.fn(),
            send: jest.fn(),
            pageInfo: {},
        };
        mockNext = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should return 401 if no credentials provided', () => {
        BasicAuthentication(mockRequest, mockResponse, mockNext);
        expect(mockResponse.set).toHaveBeenCalledWith('WWW-Authenticate', 'Basic realm=Protected Area');
        expect(mockResponse.send).toHaveBeenCalledWith(401);
        expect(mockNext).not.toHaveBeenCalled();
    });

    test('should return 401 if user not found in the database', () => {
        mockRequest.headers.authorization = 'Basic ' + Buffer.from('nonexistentuser:password').toString('base64');
        db.query.mockImplementation((query, values, callback) => {
            callback(null, [], []);
        });

        BasicAuthentication(mockRequest, mockResponse, mockNext);
        expect(mockResponse.send).toHaveBeenCalledWith(401);
        expect(mockNext).not.toHaveBeenCalled();
    });

    test('should call next() if user is authenticated', () => {
        const username = 'existinguser';
        const password = 'existingpassword';

        mockRequest.headers.authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

        const hashedPassword = bcrypt.hashSync(password);
        const mockDbResult = [
            {
                id: 1,
                username,
                password: hashedPassword,
            },
        ];

        db.query.mockImplementation((query, values, callback) => {
            callback(null, mockDbResult, []);
        });

        BasicAuthentication(mockRequest, mockResponse, mockNext);

        expect(mockNext).toHaveBeenCalled();
        expect(mockResponse.pageInfo.user).toEqual({
            id: mockDbResult[0].id,
            username: mockDbResult[0].username,
        });
        expect(mockResponse.send).not.toHaveBeenCalled();
    });

    test('should return 401 if password is incorrect', () => {
        const username = 'existinguser';
        const password = 'incorrectpassword';

        mockRequest.headers.authorization = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

        const hashedPassword = bcrypt.hashSync('correctpassword');
        const mockDbResult = [
            {
                id: 1,
                username,
                password: hashedPassword,
            },
        ];

        db.query.mockImplementation((query, values, callback) => {
            callback(null, mockDbResult, []);
        });

        BasicAuthentication(mockRequest, mockResponse, mockNext);

        expect(mockResponse.send).toHaveBeenCalledWith(401);
        expect(mockNext).not.toHaveBeenCalled();
    });

    // Agrega más pruebas según sea necesario para cubrir diferentes casos.

});