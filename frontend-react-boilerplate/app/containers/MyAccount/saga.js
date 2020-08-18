import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PULL_ACCOUNT, CREATE_USER} from './constants';
import request from '../../utils/request';
import { pullAccountError, pullAccountSuccess, createUserSuccess, createUserError } from './actions';
import makeSelectUserDetails from './selectors';

function* getUserAccount() {
  console.log(global.localStorage);
  const userData = yield select(makeSelectUserDetails());
  console.log(userData);
  //const url = `http://localhost:8080/api/users/${userData.getUserData.additionalUserInfo.profile.id}`;
  const options = { method: 'GET' };
  try {
    const response = yield call(request, url, options);
    if(response) {
      yield put(pullAccountSuccess(response));
    }
    else {
    yield put(pullAccountError(response));

    }
  } catch (error) {
    yield put(pullAccountError(error));
  }
}

function* createUser() {
  const userData = yield select(makeSelectUserDetails());
  const url = `http://localhost:8080/api/users/`;
  const body = {
    id: userData.createUserData.additionalUserInfo.profile.id,
    uname: userData.createUserData.additionalUserInfo.profile.name,
    uemail: userData.createUserData.additionalUserInfo.profile.email,
    uphoto: userData.createUserData.additionalUserInfo.profile.picture
  }
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  try {
    const response = yield call(request, url, options);
    if(response) {
      yield put(createUserSuccess(response));
    }
    else {
      yield put(createUserError(response));

    }
  } catch (error) {
      yield put(createUserError(error));
  }
}

export default function* userDetailsSaga() {
  yield takeLatest(PULL_ACCOUNT, getUserAccount);
  yield takeLatest(CREATE_USER, createUser);
}
