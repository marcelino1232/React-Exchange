async function ExChangeCovert({current,change,amount}) {
    const request = await fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_EXCHANGE_KEY}/pair/${current}/${change}/${amount}`);
    const response = await request.json();
    return response;
}

export default ExChangeCovert;