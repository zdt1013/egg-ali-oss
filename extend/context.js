module.exports = {
  /**
   * OSS Singleton instance
   * @member Context#aliOss
   * @since 1.0.0
   * @see App#aliOss
   */
  get aliOss() {
    return this.app.aliOss;
  },
};
