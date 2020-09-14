import server from './app';

const { serverHttp } = server;

serverHttp.listen(process.env.PORT || 2020);
