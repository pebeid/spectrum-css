import { Sizes } from "@spectrum-css/preview/decorators";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isChecked, isDisabled, isEmphasized, isReadOnly, size } from "@spectrum-css/preview/types";
import metadata from "../metadata/metadata.json";
import packageJson from "../package.json";
import { RadioGroup } from "./radio.test.js";
import { BasicGroupTemplate } from "./template.js";

/**
 * Radio buttons allow users to select a single option from a list of mutually exclusive options. All possible options are exposed up front for users to compare.
 *
 * Radio buttons should not be used on their own, they should always be used within a [field group](?path=/docs/components-field-group--docs). Invalid radio buttons are signified by including
 * [help text](?path=/docs/components-help-text--docs) in a field group. Sample usage for an [invalid radio state](?path=/docs/components-field-group--docs#invalid) is included in the field group documentation.
 */
export default {
	title: "Radio",
	component: "Radio",
	argTypes: {
		size: size(["s", "m", "l", "xl"]),
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		name: {
			name: "Name",
			description: "The value of the `name` attribute on the `input` element.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized,
		isChecked,
		isDisabled,
		isReadOnly,
	},
	args: {
		rootClass: "spectrum-Radio",
		size: "m",
		label: "Label",
		isEmphasized: false,
		isChecked: false,
		isDisabled: false,
		isReadOnly: false,
	},
	parameters: {
		actions: {
			handles: ["click input[type=\"radio\"]"],
		},
		packageJson,
		metadata,
	},
};

export const Default = RadioGroup.bind({});
Default.args = {};
Default.tags = ["!autodocs"];

// ********* VRT ONLY ********* //
export const WithForcedColors = RadioGroup.bind({});
WithForcedColors.tags = ["!autodocs", "!dev"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //

/**
 * The following example has two radio buttons in order to demonstrate the difference between selected and unselected.
 */
export const Standard = BasicGroupTemplate.bind({});
Standard.args = Default.args;
Standard.tags = ["!dev"];
Standard.parameters = {
	chromatic: { disableSnapshot: true },
};
Standard.storyName = "Default";

/**
 * Radios come in four different sizes: small, medium, large, and extra-large. The medium size is the default.
 */
export const Sizing = (args, context) => Sizes({
	Template: BasicGroupTemplate,
	withHeading: false,
	withBorder: false,
	...args,
}, context);
Sizing.args = {
	name: "sizing",
	id: "sizing",
};
Sizing.tags = ["!dev"];
Sizing.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * The emphasized option provides a visual prominence for the selected radio button.
 * It is best for forms, settings, lists or grids of assets, and other situations where a
 * radio button needs to be noticed.
 */
export const Emphasized = BasicGroupTemplate.bind({});
Emphasized.args = {
	isEmphasized: true,
	name: "emphasized",
};
Emphasized.tags = ["!dev"];
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};

export const Disabled = BasicGroupTemplate.bind({});
Disabled.args = {
	isDisabled: true,
	name: "disabled",
};
Disabled.tags = ["!dev"];
Disabled.parameters = {
	chromatic: { disableSnapshot: true },
};

/**
 * A radio group has a read-only option for when it's in the disabled state but still needs to be shown.
 * This allows for content to be copied, but not interacted with or changed.
 *
 * - Read-only radio buttons are disabled, but not all disabled radio buttons are read-only.
 * - Read-only radio buttons do not have a focus ring, but the button should be focusable.
 */
export const ReadOnly = BasicGroupTemplate.bind({});
ReadOnly.storyName = "Read-only";
ReadOnly.args = {
	isReadOnly: true,
	name: "read-only",
};
ReadOnly.tags = ["!dev"];
ReadOnly.parameters = {
	chromatic: { disableSnapshot: true },
};
