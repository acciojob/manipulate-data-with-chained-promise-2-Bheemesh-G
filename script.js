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
			var oddArray = [];
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

function evenNumbers(arr)
{
	return new Promise((resolve,result)=>{
		setTimeout((arr)=>{
			var evenNumbers = [];
			for(let i=0;i<arr.length;i++)
				{
					if(arr[i]%2==0)
					{
						evenNumbers.push((arr[i]*2));
					}
				}
			resolve(evenNumbers);
			return evenNumbers;
		},2000)
	})
}


document.addEventListener("DOMContentLoaded", () => {

	firstPromise(arr)
	.then((firstPromiseArr)=>{
		return printOddNumbers(firstPromiseArr);
	})
	.then((printOddNumbersArr)=>{
		document.getElementById('output').textContent = printOddNumbers;
		return evenNumbers(arr);
	})
	.then((printEvenNumbers)=>{
		document.getElementById('output').textContent = printEvenNumbers;
	})
	.catch((error)=>{
		console.log(error);
	})

	
});







