package datatableSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome = true,
		
		dryRun = false,
		
		features = { "src/test/resources/com/basic/datatableFF/"},
		
		glue = { "datatableSD/" },
				
		plugin = {
		"pretty",
		"html:target/HTML-REPORT",
		"json:target/JSON-REPORT"
		}

		)

public class datatableTest {




}