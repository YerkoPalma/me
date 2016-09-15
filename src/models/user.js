module.exports = {
  namespace: 'user',
  state: {
    username: 'Yerko Palma',
    mail: 'yerko.palma@usach.cl',
    github: 'https://github.com/YerkoPalma',
    stackoverflow: 'https://stackoverflow.com/users/3178237/yerko-palma',
    subtitle: 'Full stack developer',
    description: 'Desarrollador full stack, con preferencia por Javascript <3. También soy aficionado del diseño, con espiritu emprendedor. Actualmente trabajando como desarrollador .NET/Js, pero con ganas de ayudar en tu próximo proyecto.',
    initial: true
  },
  reducers: {
    setUsername: (data, state) => ({ username: data.payload }),
    start: (data, state) => {
      let localState = data.localState.user
      localState.initial = false
      return localState
    }
  },
  effects: {
    update: (data, state, send, done) => {
      send('user:setUsername', { payload: data.payload }, done)
    },
    init: (data, state, send, done) => {
      send('user:start', { localState: data.localState }, done)
    }
  }
}
