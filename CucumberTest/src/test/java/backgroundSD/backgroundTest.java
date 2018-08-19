package backgroundSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome = true,
		
		dryRun = false,
		
		features = { "src/test/resources/com/basic/backgroundFF/"},
		
		glue = { "backgroundSD/" },
				
		plugin = {
		"pretty",
		"html:target/HTML-REPORT-Multiple-Scenario",
		"json:target/JSON-REPORT-Multiple-Scenario"
		}

		)

public class backgroundTest {




}