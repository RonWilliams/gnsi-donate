/**
 * Configure the default values for your Foxy Store.
 *
 * This values are overriden by environment variables.
 *
 */
foxyDefaultValues = {
	storedomain: "jamstackecommerceexample.foxycart.com",
	name: "GNSI Donations",
	logo: "static/logo.jpeg", // Relative to the web root
};

/**
 * If you're not creating new Foxy environment variables,
 * it's probably not a good idea to change the values bellow.
 */
foxyEnvironmentVariables = {
	FOXYSTOREDOMAIN: "storedomain",
	FOXYSTORENAME: "name",
	FOXYSTORELOGO: "logo",
};

foxySettings = {};

for (let e of Object.keys(foxyEnvironmentVariables)) {
	if (process.env[e]) {
		foxySettings[foxyEnvironmentVariables[e]] = process.env[e];
	} else {
		foxySettings[foxyEnvironmentVariables[e]] =
			foxyDefaultValues[foxyEnvironmentVariables[e]];
	}
}

foxySettings.cart_url = `https://${foxySettings.storedomain}/cart`;

module.exports = foxySettings;
