package parammeterizationSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome = true,
		
		dryRun = false,
		
		features = { "src/test/resources/com/basic/parameterizationFF/"},
		
		glue = { "parammeterizationSD/" },
				
		plugin = {
		"pretty",
		"html:target/Parammeterization-HTML-REPORT",
		"json:target/Parammeterization-JSON-REPORT.json"
		}

		)

public class parammeterizationTest {




}