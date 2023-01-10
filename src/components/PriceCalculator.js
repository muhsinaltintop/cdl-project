const PriceCalculator = ({item}) => {
    //Discount logic is applied here 
    if (item.title === "Apple") {
        return (
            <div>
                {(() => {
                    if(item.amount < 3) return item.amount*item.price
                    else return (Math.floor(item.amount/3) * 130) +  ((item.amount % 3)* 50)
        
                })()}        
                </div>
            )
        } else if (item.title === "Banana") {
            return (
                <div>
                    {(() => {
                    if(item.amount < 2) return item.amount*item.price
                    else return (Math.floor(item.amount/2) * 45) +  ((item.amount % 2)* 30)
        
                })()}
                </div>
                )
            } else if (item.title === "Cherry") {
                return (
                    <div>{item.amount * item.price}</div>
                    )
                } else if (item.title === "Date") {
                    return (
                        <div>{item.amount * item.price}</div>
                        )
                    }
}

export default PriceCalculator