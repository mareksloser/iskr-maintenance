class ModalPage extends HTMLElement {
  connectedCallback() {
    setTimeout(function () {
      document.getElementById('btn').addEventListener('gov-click', function () {
        document.getElementById('modal').setAttribute('open', 'true');
      });
    }, 500);
    this.innerHTML = `
			<h2>Modal</h2>
			<gov-button variant="primary" id="btn" wcag-label="Zobrazit formulář o výši dávky">Vyplnit formulář</gov-button>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>
			<p>aspo idapo diopad siaspo dasipo dsaiopds iaposa ipodsai dpsoa isapdsoai pdso posadd</p>

			<gov-modal label="Podání daňového přiznání" id="modal" wcag-close-label="Zavřít modal žádosti o dávku">
				<gov-icon slot="icon" name="info"></gov-icon>
				<h3>Obsah modálního okna</h3>
				<p>Bude tvořen libovolnými komponentami</p>
				<h3>Obsah modálního okna</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros libero, pulvinar vitae tempor at, laoreet quis mi. Vivamus vitae orci mi. Sed eget nisi convallis, condimentum diam a, fermentum risus. Proin vulputate pretium nisi sit amet commodo. Fusce ac magna velit. Maecenas sit amet sem quis arcu lobortis varius a non urna. Morbi ex neque, tempor bibendum sagittis vitae, vulputate ut nibh. Vestibulum sit amet pretium metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut molestie varius nisi, sed mattis quam mollis vulputate. Morbi semper, purus sed ornare sodales, risus tellus porta massa, et eleifend erat diam vitae ex.
				</p>
				<p>
					Suspendisse quis justo nibh. Aenean id purus mattis, posuere urna a, blandit magna. Aenean a ante eleifend, ornare ipsum quis, bibendum mauris. Integer eget posuere sem, in tincidunt quam. Phasellus massa erat, sodales vel hendrerit vitae, ultrices quis dolor. Fusce id vestibulum sem, eu pretium sem. Praesent lacinia, odio non aliquam cursus, arcu ipsum ornare diam, vitae pharetra erat dui non velit. Quisque eu tempus mi. Nam a diam mauris. Quisque sollicitudin risus eu neque accumsan vulputate. Ut tincidunt metus eu nulla sodales, vitae dictum justo ornare. In tincidunt lobortis nunc, ac imperdiet odio condimentum nec. Ut aliquet pulvinar ligula vitae tincidunt. Phasellus egestas ut leo pretium laoreet. Fusce et vestibulum purus. Duis semper sem massa, non dignissim nunc aliquam sit amet.
				</p>
				<p>
					Praesent blandit mattis neque varius sagittis. Nulla ac scelerisque justo. Vestibulum aliquet blandit pharetra. Quisque lacus mi, tincidunt ac dui at, lobortis efficitur nisi. Fusce laoreet maximus purus, sit amet pulvinar mauris facilisis in. Integer fermentum elit eu aliquam sodales. Curabitur laoreet pharetra est rutrum posuere. In at eros tempus ex sodales facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras placerat dolor ac urna elementum facilisis. Aenean diam nibh, sollicitudin in porta sed, laoreet in nisl. Ut scelerisque tortor augue, vitae fermentum dui ornare non. Nulla fringilla libero non metus venenatis, eu maximus massa placerat. Praesent elementum convallis metus, vel iaculis sem pretium cursus.
				</p>
				<gov-button slot="footer" variant="primary" wcag-label="Vyplnit formulář o výši dávky">Vyplnit formulář</gov-button>
			</gov-modal>
		`;
  }
}
if (customElements.get('modal-page') === undefined) {
  customElements.define('modal-page', ModalPage);
}
//# sourceMappingURL=Modal.js.map
