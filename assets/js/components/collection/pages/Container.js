class ContainerPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<h2>Container</h2>

		<gov-container>
			<p>Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
		</gov-container>
		`;
  }
}
if (customElements.get('container-page') === undefined) {
  customElements.define('container-page', ContainerPage);
}
//# sourceMappingURL=Container.js.map
