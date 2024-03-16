function loginApi(data) {
  return $axios({
    //'url': '/employee/login',
    'url': 'http://10.135.129.4:8081/userinfo/login',
    'method': 'post',
    data
  })
}

function logoutApi(){
  return $axios({
    'url': '/employee/logout',
    'method': 'post',
  })
}
