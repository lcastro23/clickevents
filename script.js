
			var foo = document.getElementById("foo");
			var bar = document.getElementById("bar");
			var foobar = document.getElementById("foobar");

			foo.addEventListener("click", foo_function);
			bar.addEventListener("click", bar_function);
			foobar.addEventListener("click", foobar_function);

			function foo_function()
			{
				var tag = document.createElement("h3");
				var text = document.createTextNode("Foo");
				var main = document.getElementById("document_main");

				tag.appendChild(text);
				main.appendChild(tag);
			}

			function bar_function()
			{
				var tag = document.createElement("h3");
				var text = document.createTextNode("Bar");
				var main = document.getElementById("document_main");

				tag.appendChild(text);
				main.appendChild(tag);
			}

			function foobar_function()
			{
				var tag = document.createElement("h2");
				var text = document.createTextNode("FooBar");
				var main = document.getElementById("document_main");

				tag.appendChild(text);
				main.appendChild(tag);
			}
		