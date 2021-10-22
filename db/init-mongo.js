db.createUser({
  user: "sat853",
  pwd: "mdbSAth!sh123",
  roles: [
    {
      role: "readWrite",
      db: "multicontainer-database",
    },
  ],
});
