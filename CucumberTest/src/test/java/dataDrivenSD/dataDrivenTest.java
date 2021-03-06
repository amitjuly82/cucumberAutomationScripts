package dataDrivenSD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		monochrome = true,
		
		dryRun = false,
		
		features = { "src/test/resources/com/basic/dataDrivenFF/"},
		
		glue = { "dataDrivenSD/" },
				
		plugin = {
		"pretty",
		"html:target/Data-Table-HTML-REPORT",
		"json:target/Data-Table-JSON-REPORT.json"
		}

		)

public class dataDrivenTest {




}