export const NFTCard = ({nft}) => {
    return (
        <div className="w-1/4 flex flex-col">
            <div className="rounded-md" >
                <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway}></img>
            </div>
            <div className="flex flex-col y-gap-2 py bg-slate-100 rounded-b-md h-110">
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                <p className="text-gray-600">{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p className="text-gray-600">{`${nft.contract.address.substr(0, 5)}...${nft.contract.address.substr(nft.contract.address.length- 4)}`}</p>

            </div>        
            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description?.substr(0, 150)}</p>
            </div>
            <div className="flex justify-center nb-1">
                <a href={`http://etherscan.io/token/${nft.contract.address}`} target={"_blank"} className="py-2 px-4 bg-blue-500 w-1/2 text-center rounded-m text-white"> View on etherscan</a>
            </div>

        </div>
    )
}