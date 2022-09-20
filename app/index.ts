import { app, startServer } from "./bin";
// import { getSchemaWithTypeDefsAndResolvers } from "./schemas";
async function startExpress() {
    await startServer()
    app.get("/healthz", (req: any, res: any) => {
        res.json({
            data: "API is working...",
        });
    });
}
// For cluster to create workers
// if (cluster.isMaster) {
//     console.log(`Master ${process.pid} is running`)
//     const numCPUs = os.cpus().length;
//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }

//     // Check if work id is died
//     cluster.on('exit', (worker) => {
//         console.error(`worker ${worker.process.pid} died`);
//         cluster.fork();
//     });
// } else {
// }
startExpress();
