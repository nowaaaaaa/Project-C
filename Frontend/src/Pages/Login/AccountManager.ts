import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { GetRoleEP } from '../../BackendManager/endpoints';

export function getRole(): number {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token == null) {
    return 0;
  }

  if (role != null) {
    return parseInt(role);
  }

  GetRoleEP({
    jwt: token
  }).then((response: AxiosResponse<any>) => {
    var role: number = parseInt(response.data);
    console.log('request send');
    localStorage.setItem("role", role.toString());
    return role;
  }).catch(error => {
    console.error(error)
    return 0;
  })
  return 0;
}