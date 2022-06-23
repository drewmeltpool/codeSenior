import cluster from 'cluster';
import { cpus } from 'os';

const clusterApp = (app: () => void) => {
  if (cluster.isPrimary) {
    const workersCount = Number(process.env?.WORKERS_COUNT) || cpus().length;

    for (let i = 0; i < workersCount; i++) {
      cluster.fork();
    }

    cluster.on('fork', (worker) => {
      console.info('worker is dead:', worker.isDead());
    });

    cluster.on('exit', (worker) => {
      cluster.fork();
      console.info('worker is dead:', worker.isDead());
    });

    console.info(`Primary ${process.pid} is running`);
  } else {
    app();
  }
};

export default clusterApp;
