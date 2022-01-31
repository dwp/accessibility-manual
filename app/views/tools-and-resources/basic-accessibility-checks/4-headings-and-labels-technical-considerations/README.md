# {Headings and labels: }Technical considerations

<p>If you are using <a href="https://frontend.design-system.service.gov.uk/">GOV.UK Frontend</a> you can use all of the responsive styles, layouts and components in the <a href="https://design-system.service.gov.uk/">GOV.UK Design System</a>.</p>

<h2>Headings<h2>

<h3>HTML for headings</h3>

<p>It is important to mark up headings using valid HTML code. Headings should always be nested correctly rather than heading levels being selected to match formatting preferences. If necessary, the CSS can be amended to change formatting.</p>

<pre>
	<code>
		&lt;h1&gt;Heading level 1&lt;/h1&gt;
			&lt;h2&gt;Heading level 2&lt;/h2&gt;
				&lt;h3&gt;Heading level 3&lt;/h3&gt;
					&lt;h4&gt;Heading level 4&lt;/h4&gt;
				&lt;h3&gt;Heading level 3&lt;/h3&gt;
			&lt;h2&gt;Heading level 2&lt;/h2&gt;
			&lt;h2&gt;Heading level 2&lt;/h2&gt;
				&lt;h3&gt;Heading level 3&lt;/h3&gt;
	</code>
</pre>

<p>In most circumstances, a page should only have one <code>&lt;h1&gt;</code> heading.</p>

<h3>CSS for headings</h3>

<h2>Tables</h2>

<h3>HTML for tables</h3>

<p>Tables should be coded as follows:</p>

<pre>
	<code>
&lt;table&gt;
	&lt;caption&gt;Covid cases at Hogwarts&lt;/caption&gt;
		&lt;tr&gt;
			&lt;th scope="col"&gt;Month&lt;/th&gt;
			&lt;th scope="col&gt;"&gt;Griffindor&lt;/th&gt;
			&lt;th scope="col"&gt;Slytherin&lt;/th&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th scope="row"&gt;November&lt;/th&gt;
			&lt;td&gt;37&lt;/td&gt;
			&lt;td&gt;178&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th scope="row"&gt;December&lt;/th&gt;
			&lt;td&gt;41&lt;/td&gt;
			&lt;td&gt;200&lt;/td&gt;
		&lt;/tr&gt;
&lt;/table&gt;
	</code>
</pre>

<p>The <code>&lt;caption&gt;</code> tag should come immediately after the opening <code>&lt;table&gt;</code> tag.</p>

<p>Output:</p>
<table>
	<caption>Covid cases at Hogwarts</caption>
		<tr>
			<th scope="col">Month</th>
			<th scope="col>">Griffindor</th>
			<th scope="col">Slytherin</th>
		</tr>
		<tr>
			<th scope="row">November</th>
			<td>37</td>
			<td>178</td>
		</tr>
		<tr>
			<th scope="row">December</th>
			<td>41</td>
			<td>200</td>
		</tr>
</table>

<h3>CSS for tables</h3>

<h2>Labels</h2>