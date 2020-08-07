
public class CodeSmell {

    private String greeting;

    public CodeSmell(){
        this.greeting = "N/A";
    }

    public CodeSmell(String greeting){
        this.greeting = greeting;
    }

    public String getGreeting() {
        return greeting;
    }

    public void setGreeting(String greeting) {
        this.greeting = greeting;
    }

    public String SampleFirstBadCode() {
        CodeSmell cs = new CodeSmell();

        // dead code
        if(cs == null)
            cs.setGreeting("default value");
        else
            return cs.getGreeting();
         
        // dead code
        return cs.getGreeting();
    }

    public String SampleFirstRefactored() {
        CodeSmell cs = new CodeSmell("default value");

        return cs.getGreeting();
    }

    public String SampleSecondBadCode() {
        CodeSmell cs1 = new CodeSmell("1");
        CodeSmell cs2 = new CodeSmell("2");
        CodeSmell cs3 = new CodeSmell("3");
        CodeSmell cs4 = new CodeSmell("4");
        CodeSmell cs5 = new CodeSmell("5");
        CodeSmell cs6 = new CodeSmell("6");
        CodeSmell cs7 = new CodeSmell("7");

        String greeting = "" + cs1.getGreeting() + cs2.getGreeting() + cs3.getGreeting() + cs4.getGreeting() + cs5.getGreeting() + cs6.getGreeting() + cs7.getGreeting();

        return greeting;
    }

    public StringBuilder SampleSecondRefactored() {
        String greeting = "";

        for(int i = 1; i <= 7; i++){
            greeting += new CodeSmell("" + i).getGreeting();
        }

        return new StringBuilder(greeting);
    }
}