import * as actions from './actions';
import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, actions.setSearchField('abc'))).toEqual({ searchField: 'abc' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: 'REQUEST_ROBOTS_PENDING'
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: 'REQUEST_ROBOTS_SUCCESS',
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@gmail.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@gmail.com'
        }
      ],
      isPending: false
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: 'REQUEST_ROBOTS_FAILED',
        payload: 'Nooooooo!!!'
      })
    ).toEqual({
      error: 'Nooooooo!!!',
      robots: [],
      isPending: false
    });
  });
});
