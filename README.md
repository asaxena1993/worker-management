# Worker management

  
  

## About

  

This program invokes given binary file and spawn child processes.

Streaming service exposed by the binary starts accumulating the data.

Based on the number worker threads and number data sample configured this program process and stores data in memory.

  
  

## Solution

  

The given binary only streams one http connection at a time which can be invoked to accumulate data and same port can not be used to again until the worker thread is executing this binary.

The proposed solution is to spawn multiple child processes (worker threads) and execute the binary using different port numbers for each child spawn.

This creates multiple parallel streamings of random numbers which is listened by making http connection to respective ports.

The aggregation of the random numbers is monitored and once the threshold number for sample data is collected the processes are killed.

  

### Output

The sample data accumulated is currently printed on the console along with total time consumed in this process.

  

#### Console output

Workers count: 16

Sample data required: 150

  

Sample collected: rnd=8,rnd=49,rnd=42,rnd=83,rnd=47,.. more

Number of samples: 150

Start: 10228.221ms

  
  

### Expectation

  

write a component to manage the worker processes --> ***Done***

  

* handle the http connections and consume the generated numbers --> ***Done***

  

* collect a total amount of 150 data samples --> ***Done***

  

* compute the total count of numbers you processed --> ***Done***

  

* compute the total time spent --> ***Done***

  

*  [optional] scale the system to compute 150 numbers within 10sec --> ***Done***

  

*  [optional] scale the system with a max of 16 workers --> ***Done***

   

(Disclaimer for different machines each worker may take different processing time, in such scenarios try increasing workers to 18 or 19.

Go to file ***config.json*** in root and increase ***numberOfWorkers***)

  

### The Worker

  

The worker can be find enclosed (`bin/worker.mac`), it's a compiled go application.

  

### Program execution

  

`npm install`  *$ Install all the required dependencies*

`npm start`  *$ Start the program*

  

`npm test`  *$ Run the unit test cases*


### Testing

 - Mocha testing framework used with the help of Sinon library.
 - Code coverage report using nyc

-----------------------|----------|----------|----------|----------|-------------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------------|----------|----------|----------|----------|-------------------|
All files              |      100 |      100 |      100 |      100 |                   |
 worker-management/lib |      100 |      100 |      100 |      100 |                   |
  aggregator.js        |      100 |      100 |      100 |      100 |                   |
  streamer.js          |      100 |      100 |      100 |      100 |                   |
  worker.js            |      100 |      100 |      100 |      100 |                   |
-----------------------|----------|----------|----------|----------|-------------------|