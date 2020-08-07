/*

example usage:

FirebaseOptions firebaseOptions = FirebaseAdminConfig.getOptions();
FirebaseApp.initializeApp(firebaseOptions);

*/

public class FirebaseAdminConfig {

    private static FirebaseOptions options = null;
    private static Object lock= new Object();

    protected FirebaseAdminConfig() {}

    public static FirebaseOptions getOptions() {

        synchronized (lock) {
            if (instance == null) {
                options = init();
            }
        }

        return options;       
    }

    private static FirebaseOptions init() {

        FileInputStream serviceAccount = null;

        try {
            Resource resource = new ClassPathResource("kimneizlio-firebase-adminsdk.json");
            serviceAccount = new FileInputStream(resource.getFile().getAbsolutePath());
        } catch (IOException e) {
            e.printStackTrace();
        }

        try {
            options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://kimneizlio.firebaseio.com")
                    .build();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return options;
    }

}