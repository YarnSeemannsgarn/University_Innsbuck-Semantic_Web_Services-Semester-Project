
/*
 *
 *
 * For creating dynamic forms
 *
 *
 */


var Form = new function ()
	{
		this.createList = function (list)
		{
			for (var key in list)
			{
				// skip loop if the property is from prototype
				if (!list.hasOwnProperty(key)) continue;
				var obj = list[key];
				for (var prop in obj)
				{
					// skip loop if the property is from prototype
					if (!obj.hasOwnProperty(prop)) continue;
					// your code
					console.log(prop + " = " + obj[prop]);
				}
			}
		};
	}