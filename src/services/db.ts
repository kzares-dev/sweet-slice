const initializeDB = async (db: any) => {
    try {
        await db.execAsync(`
          PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS expenses (
          id TEXT PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          amount REAL NOT NULL,
          taxes REAL,
          category TEXT NOT NULL,
          paymentType TEXT NOT NULL
           ); 
           CREATE TABLE IF NOT EXISTS incomes (
          id TEXT PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          amount REAL NOT NULL,
          taxes REAL,
          category TEXT NOT NULL,
          paymentType TEXT NOT NULL
      ); 
          `);
        console.log("DB connected");
    } catch (error) {
        console.log("Error in connecting DB", error);
    }
};

export { initializeDB };