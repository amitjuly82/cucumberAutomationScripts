package dataDriverSD;

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
		"html:target/HTML-REPORT-Data-Driven",
		"json:target/JSON-REPORT-Data-Driven"
		}

		)

public class dataDrivenTest {




}