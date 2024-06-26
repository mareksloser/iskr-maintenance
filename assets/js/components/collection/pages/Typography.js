class TypographyPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
			<p>
				<a class="gov-text--xs" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--s" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--m" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--l" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--2xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--3xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--4xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--5xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
				<a class="gov-text--6xl" href="#copy" target="_blank">paragraph with no more than four lines</a><br>
			</p>

			<ul>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
			</ul>
			<ol>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
				<li>This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines</li>
			</ol>

			<h6 class="gov-text--6xl">Heading 1 Heading 1 Heading 1</h6>
			<h2>Heading 2 Heading 2 Heading 2</h2>
			<p>
				Body 1/400<br />A lead <a href="#copy" target="_blank">paragraph with no more than four lines</a> . Body 1/400 A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines
			</p>
			<h4 class="gov-text--l">Heading 2 Heading 2 Heading 2</h4>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<p>
				Body 2/400<br />This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines
			</p>
			<h2>Heading 2 Heading 2 Heading 2</h2>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<p>
				Body 3/400<br />This is for body copy in components such as accordion, structured list or tile. This is for body copy in components such as accordion, structured list or tile.
			</p>
			<h3>Heading 3 Heading 3 Heading 3</h3>
			<h4>Heading 4 Heading 4 Heading 4</h4>
			<p>
				Bold - Body 1/700<br />A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines. Body 1/400 A lead paragraph with no more than four lines
			</p>
			<h4>Heading 4 Heading 4 Heading 4</h4>
			<h5>Heading 5 Heading 5 Heading 5</h5>
			<p>
				Bold - Body 2/700<br />This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines. This is commonly used for long paragraphs with more than four lines
			</p>
			<h5>Heading 5 Heading 5 Heading 5</h5>
			<h6>Heading 6 Heading 6 Heading 6</h6>
			<p>
				Bold - Body 3/700<br />This is for body copy in components such as accordion, structured list or tile. This is for body copy in components such as accordion, structured list or tile.
			</p>
			<h6>Heading 6 Heading 6 Heading 6</h6>
			<p class="text-x-small">
				Assistive<br />This is for explanatory helper text that appears below a field
			</p>
			<ul>
				<li>seznam položka seznam položka seznam položka<br />seznam položka seznam položka seznam položka</li>
				<li>seznam položka seznam položka seznam položka</li>
				<li>seznam položka seznam položka seznam položka</li>
			</ul>
		`;
  }
}
if (customElements.get('typography-page') === undefined) {
  customElements.define('typography-page', TypographyPage);
}
//# sourceMappingURL=Typography.js.map
