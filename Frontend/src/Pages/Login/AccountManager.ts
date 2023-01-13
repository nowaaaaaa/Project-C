import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { GetRoleEP } from '../../BackendManager/endpoints';

export function parseJwt (token: string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export function getRole(data: string): number {
  const token = parseJwt(data)
  const value = Object(token)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
  return parseInt(value);
}

export function getName(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]
  return value;
}

export function getEmail(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
  return value;
}

export function getPhone(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"]
  return value;
}

export function getCompanyId(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["CompanyId"]
  return value;
}

export function getMachines(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["Machines"]
  return value;
}

export function getAckProblems(data: string): string {
  const token = parseJwt(data)
  const value = Object(token)["AckProblems"]
  return value;
}