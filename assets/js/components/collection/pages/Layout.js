class LayoutPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
		<h2>Layout</h2>

		<gov-container>
			<gov-layout type="stretch">
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Stretch</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="right">
				<gov-layout-column>
					<p><b>Aside right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="left">
				<gov-layout-column>
					<p><b>Aside left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="right" inverse>
				<gov-layout-column>
					<p><b>Aside right inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside right inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="aside" variant="left" inverse>
				<gov-layout-column>
					<p><b>Aside left inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus.</p>
				</gov-layout-column>
				<gov-layout-column>
					<p><b>Aside left inverse</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text" variant="left">
				<gov-layout-column>
					<p><b>Text left</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text">
				<gov-layout-column>
					<p><b>Text</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
			<gov-layout type="text" variant="right">
				<gov-layout-column>
					<p><b>Text right</b> Ut sollicitudin risus sit amet placerat fermentum. Sed libero mauris, maximus cursus magna tincidunt, efficitur congue enim. Suspendisse potenti. Sed ac eleifend leo. Nullam a sapien in diam semper faucibus sit amet vel nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu faucibus mi. Morbi leo ipsum, tempus vel vulputate non, varius et lectus. Donec justo lacus, congue hendrerit felis sit amet, commodo lobortis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla vulputate urna sapien. Proin imperdiet rhoncus dictum. Pellentesque tempor ultrices tortor, ac mollis lorem mollis non. Phasellus sit amet maximus ex, id scelerisque nulla. Etiam eu orci a nulla semper maximus et at quam.</p>
				</gov-layout-column>
			</gov-layout>
			<br>
		</gov-container>
		<br>

		`;
  }
}
if (customElements.get('layout-page') === undefined) {
  customElements.define('layout-page', LayoutPage);
}
//# sourceMappingURL=Layout.js.map
