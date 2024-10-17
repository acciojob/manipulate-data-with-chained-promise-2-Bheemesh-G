//your JS code here. If required.

const arr = [1 , 2, 3, 4];
console.log(arr);
function firstPromise(arr)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(arr);
		},3000)
	})
}


function printOddNumbers(arr)
{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			var oddArray = [];
			for(let i=0;i<arr.length;i++)
				{
					if(arr[i]%2!==0)
					{
						oddArray.push(arr[i]);
					}
				}
                document.getElementById('output').textContent = oddArray;
			resolve(arr);
		},1000)
	})
}

function evenNumbers(arr)
{
	return new Promise((resolve,result)=>{
		setTimeout(()=>{
			var evenNumbers = [];
			for(let i=0;i<arr.length;i++)
				{
					if(arr[i]%2==0)
					{
						evenNumbers.push((arr[i]*2));
					}
				}
                document.getElementById('output').textContent = evenNumbers;
			resolve(arr);
		},2000)
	})
}

document.addEventListener("DOMContentLoaded", () => {

	firstPromise(arr)
	.then((firstPromiseArr)=>{
		return printOddNumbers(firstPromiseArr);
	})
	.then((printOddNumbersArr)=>{
		return evenNumbers(printOddNumbersArr);
	})
	.catch((error)=>{
		console.log(error);
	})
});









