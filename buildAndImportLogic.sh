cd ../Simulator
npm test
read -p "Verify test results"
rm *.tgz
npm pack
cd ../ship-powerplant-app
npm i ../Simulator/ship-powerplant-simulator-$1.tgz
read -p "Start expo"
expo start -c
