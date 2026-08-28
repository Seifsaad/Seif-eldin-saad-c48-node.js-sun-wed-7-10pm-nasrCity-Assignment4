CREATE ROLE store_manager

GRANT CONNECT ON DATABASE "Assignment4" TO store_manager;

GRANT USAGE ON SCHEMA public TO store_manager;

GRANT SELECT, INSERT, UPDATE ON ALL TABLES IN SCHEMA public TO store_manager;

REVOKE UPDATE ON ALL TABLES IN SCHEMA public FROM store_manager;

GRANT DELETE ON TABLE sales TO store_manager;
