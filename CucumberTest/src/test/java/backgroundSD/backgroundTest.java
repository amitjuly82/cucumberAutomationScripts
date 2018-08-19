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
		"html:target/Multiple-Scenario-HTML-REPORT",
		"json:target/Multiple-Scenario-JSON-REPORT.json"
		}

		)

public class backgroundTest {




}