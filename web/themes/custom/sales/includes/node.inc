<?php

/**
 * @file
 * Functions to support theming in the sales theme.
 */

/**
 * Implements hook_preprocess_node().
 */
function sales_preprocess_node(array &$variables) {

  if (isset($variables['node'])) {
    $node = $variables['node'];
    $node_type = $node->getType();
  }
  // Node preprocessing by Content Type.
  if (isset($node_type) && isset($node)) {

    // Check if feature image exist.
    $variables['featured_image'] = FALSE;
    if (_sales_field_check($node, 'field_featured_image')) {
      $variables['featured_image'] = TRUE;
    }
    // Set width of featured image container.
    $variables['field_img_container_width'] = 'full';
    if (_sales_field_check($node, 'field_img_container_width')) {
      $variables['field_img_container_width'] = $node->get('field_img_container_width')->getString();
    }

    // Card or Card Horizontal View.
    if ($variables['view_mode'] === 'card' || $variables['view_mode'] === 'card_horizontal') {
      // Card Title.
      $variables['card']['title'] = $node->get('title')->getString();
      // Card links.
      $variables['card']['links'][] = [
        'title' => 'Read More',
        'aria_label' => $variables['card']['title'],
        'url' => $node->toUrl()->toString(),
      ];

      // Card Node URL. Used for Horizonal cards.
      $variables['card']['url'] = $node->toUrl()->toString();

      // Whole card clickable.
      $variables['card']['stretched_link'] = TRUE;
      // Description.
      if (_sales_field_check($node, 'field_description')) {
        $variables['card']['description'] = $node->get('field_description')->getString();
      }
      // Date.
      if (_sales_field_check($node, 'field_experience_date')) {
        $variables['card']['date'] = $node->get('field_experience_date')->view('card');
      }
      // Featured Image.
      $variables['card']['image'] = FALSE;
      if (_sales_field_check($node, 'field_featured_image')) {
        $card_media_entity = $node->get('field_featured_image')->referencedEntities()[0];
        $variables['card']['image'] = _sales_image_with_focal($card_media_entity->get('field_media_image'));
        $variables['#cache']['tags'][] = 'media:' . $card_media_entity->id();
      }
      // If Headshot override card image.
      if (_sales_field_check($node, 'field_headshot')) {
        $card_media_entity = $node->get('field_headshot')->referencedEntities()[0];
        $variables['card']['image'] = _sales_image_with_focal($card_media_entity->get('field_media_image'));
        $variables['#cache']['tags'][] = 'media:' . $card_media_entity->id();
      }

      $variables['card']['card_modifiers'] = [
        $node_type,
        $variables['card']['image'] ? 'has-image' : 'no-image',
      ];
    }
  }
}
