$(document).ready(function(){
	gridInit(16);
	clearCanvas();
	resizeGrid();
	eraser1();
	marker1();
});

var canvasSize = 16;
var markerOn = true;


function gridInit(size)
{
	var gridSize = 500/size;

	for(var i = 0; i < size; i++)
	{
		$(".grid").append("<tr class='row' style='height: " + gridSize + "px;'></tr>");
	}

	for(var i = 0; i < size; i++)
	{
		$(".row").append("<td class='column' style='border: 1px dotted black; width: " + gridSize + "px'></td>");
	}

	$(".column").css("background-color", "black");
	$(".column").css("opacity", 0);
	$(".column").hover(function(){
		if(markerOn === true)
		{
			$(this).css("opacity", "+=0.16");
		}

		else
		{
			$(this).css("opacity", 0);
		}
	});

}

function resizeGrid()
{
	$("#size").click(function(){
		canvasSize = prompt("Please enter a grid-size between 1-70.");

		if(canvasSize >= 1 && canvasSize <= 70)
		{
			$(".grid").empty();
			gridInit(canvasSize);
		}

		else if(isNaN(canvasSize))
		{
			while(isNaN(canvasSize))
			{
				canvasSize = prompt("Please enter a grid-size between 1-70.");
			}

			$(".grid").empty();
			gridInit(canvasSize);
		}

		else
		{
			while(canvasSize < 1 || canvasSize > 70)
			{
				canvasSize = prompt("Please enter a grid-size between 1-70.");
			}

			$(".grid").empty();
			gridInit(canvasSize);
		}
	});
}

function clearCanvas()
{
	$("#clear").click(function(){
		$(".grid").empty();
		gridInit(canvasSize);
	});
}

function eraser1()
{
	$("#eraser").click(function(){
		markerOn = false;
	});
}

function marker1()
{
	$("#marker").click(function(){
		markerOn = true;
	});
}

    
