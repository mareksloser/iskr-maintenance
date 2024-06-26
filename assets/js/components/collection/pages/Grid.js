class GridPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<h2>
			Grid
		</h2>
		<style>
			.gov-grid-item span {
				display: block;
				background: lightgray;
				padding: 10px;
			}
		</style>
		<gov-grid>
			<gov-grid-item size="1/12"><span>1/12</span></gov-grid-item>
			<gov-grid-item size="11/12"><span>11/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="2/12"><span>2/12</span></gov-grid-item>
			<gov-grid-item size="10/12"><span>10/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="3/12"><span>3/12</span></gov-grid-item>
			<gov-grid-item size="9/12"><span>9/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="4/12"><span>4/12</span></gov-grid-item>
			<gov-grid-item size="8/12"><span>8/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="5/12"><span>5/12</span></gov-grid-item>
			<gov-grid-item size="7/12"><span>7/12</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid>
			<gov-grid-item size="6/12"><span>6/12</span></gov-grid-item>
			<gov-grid-item size="6/12"><span>6/12</span></gov-grid-item>
		</gov-grid>

		<h2>Responsive grid</h2>
		<gov-grid>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 1</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 2</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 3</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 4</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 5</span></gov-grid-item>
			<gov-grid-item size-sm="6/12" size-md="4/12" size-lg="3/12" size-xl="2/12"><span>Cell 6</span></gov-grid-item>
		</gov-grid>

		<h2>Horizontal (X) align</h2>
		<gov-grid>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-x="middle">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-x="bottom">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat. Morbi mauris eros, porttitor non tellus sed, iaculis ultrices tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. Ut et tempor risus. In volutpat nec diam semper iaculis. Nam tempus varius nunc, eu congue mauris ornare nec. Sed sodales et nisl vitae volutpat. Duis luctus metus ut justo vestibulum, id suscipit lacus suscipit. Vestibulum at nisi at turpis volutpat fermentum non id erat.</span></gov-grid-item>
		</gov-grid>
		<br>

		<h2>Vertical (Y) align</h2>
		<gov-grid>
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-y="center">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
		<br>
		<gov-grid align-y="right">
			<gov-grid-item size="4/12"><span>Curabitur tincidunt leo elit, et accumsan leo vestibulum sit amet. Nulla quis nibh a diam ultricies volutpat. Pellentesque fringilla id diam in placerat. Pellentesque consectetur, nisl tincidunt scelerisque vulputate, diam velit cursus neque, eu posuere urna metus id justo. </span></gov-grid-item>
		</gov-grid>
			`;
  }
}
if (customElements.get('grid-page') === undefined) {
  customElements.define('grid-page', GridPage);
}
//# sourceMappingURL=Grid.js.map
