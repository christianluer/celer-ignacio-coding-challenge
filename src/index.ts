import dotenv from 'dotenv';
import app from './app';
import { User } from './models/User';
import { MonthlyResume } from './models/MonthlyResume';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT_BACK || 3000;

// Start server
app.listen(PORT, () => {
  try {
    // Sync models with the database
    User.sync();
    MonthlyResume.sync();
  } catch (error) {
    console.error('Error syncing models with the database:', error);
  }
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Challenge endpoint: http://localhost:${PORT}/challenge`);
  console.log(`💾 Database initialization successful migration with User and MonthlyResume models endpoint http://localhost:${PORT}/challenge/db/init`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
