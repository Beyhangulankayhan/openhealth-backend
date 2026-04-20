import sql from "mssql";

const config = {
  user: "sa",
  password: "123456", // sa için verdiğin gerçek şifre
  server: "DESKTOP-I0292P0\\SQLEXPRESS",
  database: "DiyetDB",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

export async function connectDB() {
  try {
    await sql.connect(config);
    console.log("SQL Server bağlantısı başarılı");
  } catch (err) {
    console.error("SQL bağlantı hatası:", err);
  }
}

export { sql };