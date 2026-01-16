# Database Setup Guide

## Current Status
- ✅ MySQL PHP extension installed
- ✅ Database configuration in .env file
- ❌ MySQL server not running

## Solution Steps

### Step 1: Start MySQL Server

**Option A: Using systemctl (if MySQL is installed as service)**
```bash
sudo systemctl start mysql
# or
sudo systemctl start mysqld
```

**Option B: Using service command**
```bash
sudo service mysql start
# or
sudo service mysqld start
```

**Option C: If using XAMPP**
```bash
# Start XAMPP Control Panel and start MySQL service
# Or via command line:
sudo /opt/lampp/lampp startmysql
```

**Option D: If using MariaDB instead of MySQL**
```bash
sudo systemctl start mariadb
```

### Step 2: Verify MySQL is Running

```bash
# Check if MySQL is listening on port 3306
netstat -tlnp | grep :3306
# or
ss -tlnp | grep :3306

# Check MySQL process
ps aux | grep mysql | grep -v grep
```

### Step 3: Create Database

**Option A: Using MySQL command line**
```bash
mysql -u root -p
# Enter your MySQL root password (if set)
```

Then in MySQL:
```sql
CREATE DATABASE laravel;
# Or if database exists, you can use it
SHOW DATABASES;
EXIT;
```

**Option B: If no password set**
```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS laravel;"
```

### Step 4: Update .env File (if needed)

Current configuration in `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

If you need to change:
- Database name: Change `DB_DATABASE`
- Username: Change `DB_USERNAME`
- Password: Add `DB_PASSWORD=your_password`

### Step 5: Test Connection

```bash
cd server
php artisan migrate:status
```

If successful, you should see migration status (or "Nothing to migrate").

### Step 6: Run Migrations

```bash
cd server
php artisan migrate
```

This will create all necessary database tables.

---

## Troubleshooting

### If MySQL is not installed:

**Install MySQL:**
```bash
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
```

**Or install MariaDB (MySQL alternative):**
```bash
sudo apt update
sudo apt install mariadb-server
sudo mysql_secure_installation
```

### If you get "Access denied" error:

1. Check MySQL root password:
   ```bash
   sudo mysql -u root
   ```

2. If that doesn't work, reset root password:
   ```bash
   sudo mysql
   ```
   Then in MySQL:
   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
   FLUSH PRIVILEGES;
   EXIT;
   ```

3. Update `.env` with the password:
   ```env
   DB_PASSWORD=your_new_password
   ```

### If using XAMPP:

1. Start XAMPP Control Panel
2. Click "Start" next to MySQL
3. Default XAMPP MySQL:
   - Username: `root`
   - Password: (usually empty)
   - Port: `3306`

---

## Quick Test After Setup

```bash
cd server
php artisan migrate:status
```

If you see migration status (even if empty), the connection is working!

---

**Current Error:** `Connection refused` means MySQL server is not running.  
**Solution:** Start MySQL server using one of the methods above.
