//your JS code here. If required.

const arr = [1,2,3,4];

function firstPromise(arr)
{
	return new Promise((resolve,reject)=>{
		setTimeout((arr)=>{
			resolve(arr);
		},3000)
	})
}


function printOddNumbers(arr)
{
	return new Promise((resolve,reject)=>{
		setTimeout((arr)=>{
			const oddArray = [];
			for(let i=0;i<arr.length;i++)
				{
					if(arr[i]%2!==0)
					{
						oddArray.push(arr[i]);
					}
				}
			resolve(oddArray);
		},1000)
	})
}


document.addEventListener("DOMContentLoaded", () => {

	firstPromise(arr)
	.then((firstPromiseArr)=>{
		printOddNumbers(firstPromiseArr);
	})
	.then((printOddNumbersArr)={
		document.getElementById('output').textContent = printOddNumbers;
	})
	.catch((error)=>{
		console.log(error);
	})

	
});







