'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pigeonId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: models => {
        Comment.belongsTo(models.User, {
            foreignKey: 'ownerId',
            hooks: true
        });
        Comment.belongsTo(models.Pigeon, {
            foreignKey: 'id'
        });
      }
    },
    hooks: {
      beforeCreate: (comment, options) => {
        comment.date && (comment.date = Date.parse(comment.date));
        comment.createdAt = new Date().getTime();
        comment.updatedAt = new Date().getTime();
      },
      beforeUpdate: (comment, options) => {
        comment.updatedAt = new Date().getTime();
      }
    }
  });
  return Comment;
};
