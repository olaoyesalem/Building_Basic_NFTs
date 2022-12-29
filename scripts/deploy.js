async function main(){
const NFTContractFactory = await ethers.getContractFactory("NFT");
const NFTContract = await NFTContractFactory.deploy();
await NFTContract.deployed;
console.log(`NFT contract deployed to: ${NFTContract.address}`);





}
main().
then(()=>process.exit(0)).
catch((error)=>{
  console.error(error);
  process.exit(1);
})