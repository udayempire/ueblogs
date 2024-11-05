export function timeAgo(time: string | Date): string {
    try{
        const now = new Date()
        const publishedTime = typeof time==="string"?new Date(time):time ;
        const diffTime = (now.getTime() - publishedTime.getTime());
        console.log(diffTime)
        const seconds = Math.floor(diffTime/1000);
        const minutes = Math.floor(seconds/60);
        const hrs = Math.floor(minutes/60);
        const days = Math.floor(hrs/24);
        if(seconds<60){
            return (`${seconds} seconds ago`)
        }
        else if(minutes<60){
            return (`${minutes} minutes ago`)
        }
        else if (days===1){
            return("1 Day Ago")
        }
        else{
            const DD = publishedTime.getDate();
            const MM = publishedTime.toLocaleString('default',{month:"long"})
            const YY = publishedTime.getFullYear();
            return (`${DD} ${MM} ${YY}`)
        }
    }catch(e){
        console.log(e)
        return (" Hello")
    }
}