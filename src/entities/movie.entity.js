const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "bot_movies",
  columns: {
    id: {
      "primary": true,
      "type": "int",
      "generated": true
    },
    name: {
      type: "varchar",
    },
    slug: {
      type: "varchar",
      nullable: true
    },
    origin_name: {
      type: "varchar",
      nullable: true
    },
    thumb_url: {
      type: "varchar",
      nullable: true
    },
    poster_url: {
      type: "varchar",
      nullable: true
    },
    year: {
      type: "varchar",
      nullable: true
    },
    crapter_id: {
      type: "varchar",
      nullable: true
    },
    modified_time: {
      type: "timestamp",
      nullable: true
    },
    algolia_object_id: {
      type: "varchar",
      nullable: true
    },
    created_at: {
      name: "created_at",
      type: "timestamp with time zone",
      createDate: true,
    },
    updated_at: {
      name: "updated_at",
      type: "timestamp with time zone",
      updateDate: true,
    },
  }
});